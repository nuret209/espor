"use server"

import { prisma } from "./prisma"

export async function editMenu(menu: string, editedText: string) {
    try {
        await prisma.menu.update({
            where: {
                title: menu,
            },
            data: {
                title: editedText,
            }
        })
        return true;
    }
    catch (Err) {
        return Err;
    }
}

export async function editPage(menu: string, page: string, editedText: string) {
    try {
        const pageId = (await prisma.menu.findUnique({
            where: { title: menu },
            include: { pages: true }
        }))?.pages.find(p => p.title.trim() === page)?.id
        if (!pageId) throw new Error("Page not found");
        await prisma.page.update({
            where: {
                id: pageId,
            },
            data: {
                title: editedText,
            }
        })
        return true;
    }
    catch (Err) {
        return Err;
    }
}

export async function editContent(menu: string, page: string, content: string, editedText: string) {
    try {
        const contentId = (await prisma.menu.findUnique({
            where: { title: menu },
            include: { pages: { include: { Content: true } } }
        }))?.pages.find(p => p.title.trim() === page)?.Content.find(item => item.title.trim() == content.trim())?.id
        if (!contentId) throw new Error("Page not found");
        await prisma.content.update({
            where: {
                id: contentId,
            },
            data: {
                title: editedText,
            }
        })
        return true;
    }
    catch (Err) {
        return Err;
    }
}
export async function editContentText(menu: string, page: string, content: string, editedText: string) {
    try {
        const contentId = (await prisma.menu.findUnique({
            where: { title: menu },
            include: { pages: { include: { Content: true } } }
        }))?.pages.find(p => p.title.trim() === page)?.Content.find(item => item.title.trim() == content.trim())?.id
        if (!contentId) throw new Error("Page not found");
        await prisma.content.update({
            where: {
                id: contentId,
            },
            data: {
                content: editedText,
            }
        })
        return true;
    }
    catch (Err) {
        return Err;
    }
}
