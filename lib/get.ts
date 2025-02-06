"use server"
import { prisma } from "./prisma";

export async function getMenus() {
    const menus = await prisma.menu.findMany({
        include: {
            pages: {
                include: {
                    Content: true, // Her bir Page'e bağlı Content'leri de getirir
                },
            },
        },
    });
    return menus;
}
export async function getContents(slug: string) {
    const contents = await prisma.page.findUnique({
        where: {
            slug
        },
        include: {
            Content: true, // Her bir Page'e bağlı Content'leri de getirir
        },
    });
    return contents;
}

export async function getTitle(slug: string) {
    const res = await prisma.page.findUnique({
        where: {
            slug
        },
    });
    return res?.title;
}
