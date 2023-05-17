

//Utils For Email Faker
import {faker} from "@faker-js/faker"

export function getRandomEmail()
{
    return faker.internet.email();
    
}

//Get Random Username
export function getRandomName()
{
    return faker.internet.userName();
}

