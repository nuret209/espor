"use server"

import { getMenus } from "./get";
import { prisma } from "./prisma"

export const deleteMenu = async (menu: string) => {
    try {
        await prisma.menu.delete({
            where: {
                title: menu
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
    try {
        await prisma.page.delete({
            where: {
                slug: _page.slug
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