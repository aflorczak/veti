import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async (login, email) => {
    const user = await prisma.user.create({
        data: {
            login: login,
            email: email
        }
    });
    return user;
}

export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

export const getUserByLogin = async (loginSent) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            login: loginSent
        }
    });
    return user;
}

export const updateUserByLogin = async(login, newLogin, newEmail) => {
    const updatedUser = await prisma.user.update({
        where: {
            login: login
        },
        data: {
            login: newLogin,
            email: newEmail
        }
    });
    return updatedUser;
}

export const deleteUserByLogin = async(login) => {
    const deletedUser = await prisma.user.delete({
        where: {
            login: login
        }
    });
    return deletedUser;
}