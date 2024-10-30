import { db } from "./server/db";

async function main() {
    await db.user.create({
        data: {
            emailAddress: "test@test.com",
            firstName: "Joye",
            lastName: "Huang",
        }
    });

    console.log("User created");
}

main().catch(console.error);
