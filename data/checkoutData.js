import { faker } from '@faker-js/faker';
export const checkoutDetails = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode()
}