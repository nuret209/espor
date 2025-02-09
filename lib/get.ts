"use server"
import { prisma } from "./prisma";

export async function getMenus() {
  const menus = await prisma.menu.findMany({
    include: {
      pages: true,
    },
  });

  return menus.map(menu => ({
    id: menu.id,
    title: menu.title,
    pages: menu.pages.map(page => ({
      title: page.title,
      slug: page.slug,
    })),
  }));
}


export async function getContentsWithSlug(slug: string) {
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

export async function getPages() {
    const pages = await prisma.page.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
    return pages;
}

export async function getPagesWithMenu(menu: string) {
    const menus = await prisma.menu.findUnique({
        where: {
            title: menu.trim(),
        },
        include: {
            pages: true// Her bir Page'e bağlı Content'leri de getirir
        }
    });
    return menus?.pages;
}
export async function getContentsWithMenu(menu: string, page: string) {
    const menus = await prisma.menu.findUnique({
        where: {
            title: menu.trim(),
        },
        include: {
            pages: {
                include: {
                    Content: true, // Her bir Page'e bağlı Content'leri de getirir
                },
            }, // Her bir Page'e bağlı Content'leri de getirir
        },
    });
    return menus?.pages.find(item => item.title.trim() == page.trim())?.Content
}
export async function getContents(menu: string, page: string, title: string) {
    const menus = await prisma.menu.findUnique({
        where: {
            title: menu.trim(),
        },
        include: {
            pages: {
                include: {
                    Content: true, // Her bir Page'e bağlı Content'leri de getirir
                },
            }, // Her bir Page'e bağlı Content'leri de getirir
        },
    });
    return menus?.pages.find(item => item.title.trim() == page.trim())?.Content.find(item => item.title == title.trim())
}


export async function getTitle(slug: string) {
    const res = await prisma.page.findUnique({
        where: {
            slug
        },
    });
    return res?.title;
}
