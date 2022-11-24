import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// create one
export const createUser = async (login, email) => {
    const user = await prisma.user.create({
        data: {
            login: login,
            email: email
        }
    });
    // Check if it was saved
    return user;
}

// read many
export const getUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}


// read one
export const getUserByLogin = async (loginSent) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            login: loginSent
        }
    });
    return user;
}

// update one
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

// delete one
export const deleteUserByLogin = async(login) => {
    console.log(login);
    const deletedUser = await prisma.user.delete({
        where: {
            login: login
        }
    });
    return deletedUser;
}