"use server"

import { getMenus } from "./get";
import { prisma } from "./prisma"

export const deleteMenu = async (menu: string) => {
    const _menu = (await getMenus()).find(m => m.title.trim() === menu.trim());
    if (!_menu) {
        console.error("Menu not found");
        return false;
    }
    try {
        _menu.pages.forEach(page => deletePage(menu, page.slug))
        await prisma.menu.delete({
            where: {
                id: _menu.id
            }
        })
        return true;
    }
    catch (Err) {
        console.error("Error deleting menu:", Err);
        return false;
    }

}
export const deletePage = async (menu: string, page: string) => {
    const _page = (await getMenus()).find(m => m.title.trim() == menu.trim())?.pages.find(p => p.title.trim() === page.trim());
    if (!_page) {
        console.error("Page not found");
        return false;
    }
    _page.Content.forEach(content =>
        deleteContent(menu, page, content.title)
    )
    try {
        await prisma.page.delete({
            where: {
                slug: _page.slug
            },
            include: {
                Content: true
            }
        })
        return true;
    }
    catch (Err) {
        console.error("Error deleting page:", Err);
        return false;
    }
}

export const deleteContent = async (menu: string, page: string, content: string) => {
    try {
        const contentId = (await prisma.menu.findUnique({
            where: { title: menu },
            include: { pages: { include: { Content: true } } }
        }))?.pages.find(p => p.title.trim() === page)?.Content.find(item => item.title.trim() == content.trim())?.id
        if (!contentId) throw new Error("Page not found");
        await prisma.content.delete({
            where: {
                id: contentId,
            }
        })
        return true;
    }
    catch (Err) {
        return Err;
    }
}