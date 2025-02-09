"use server"
import { getMenus, getPages } from "./get";
import { prisma } from "./prisma";

export async function addMenu(menuTitle: string) {
    try {
        await prisma.menu.create({
            data: {
                title: menuTitle
            }
        })
        return true;
    }
    catch (err) {
        console.error(err);
        return false;
    }
}

export async function addContent(content: string, contentTitle: string, pageTitle: string) {
    const contents = await getPages();
    const page = contents.find(c => c.title === pageTitle);
    try {
        if (page)
            await prisma.page.update({
                where: {
                    id: page.id
                },
                data: {
                    Content: {
                        create: {
                            content,
                            title: contentTitle
                        }
                    }
                }
            })
    }
    catch (err) {
        console.error(err);
        return false;

    }
}


export async function addPage(pageTitle: string, slug: string, menuTitle: string) {
    const menus = await getMenus();
    const menu = menus.find(m => m.title === menuTitle);
    try {
        if (menu) {
            await prisma.menu.update({
                where: {
                    id: menu.id
                },
                data: {
                    pages: {
                        create: {
                            title: pageTitle,
                            slug
                        }
                    }
                }
            });
            return true;
        }
    }
    catch (err) {
        console.error(err);
        return false;
    }
}