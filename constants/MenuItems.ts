interface MenuItemProps {
    id: number;
    title: string;
    description: string;
    originalPrice: number;  // Use "number" instead of "Double"
    discountedPrice: number; // Use "number" instead of "Double"
}

export const MENU_ITEMS: MenuItemProps[] = [
    {
        "id": 1,
        "title": "Espresso",
        "description": "Strong, concentrated coffee.",
        "originalPrice": 28,
        "discountedPrice": 25,
    },
    {
        "id": 2,
        "title": "Americano",
        "description": "Espresso diluted with hot water.",
        "originalPrice": 26,
        "discountedPrice": 24,
    },
    {
        "id": 3,
        "title": "Latte",
        "description": "Espresso with steamed milk and foam.",
        "originalPrice": 29,
        "discountedPrice": 25,
    },
    {
        "id": 4,
        "title": "Cappuccino",
        "description": "Equal parts espresso, milk, and foam.",
        "originalPrice": 30,
        "discountedPrice": 27,
    },
    {
        "id": 5,
        "title": "Macchiato",
        "description": "Espresso with a dollop of foam.",
        "originalPrice": 30,
        "discountedPrice": 27,
    },
    {
        "id": 6,
        "title": "Mocha",
        "description": "Latte with chocolate flavor.",
        "originalPrice": 25,
        "discountedPrice": 23,
    },
    {
        "id": 7,
        "title": "Flat White",
        "description": "Espresso with velvety steamed milk.",
        "originalPrice": 26,
        "discountedPrice": 23,
    },
    {
        "id": 8,
        "title": "Cortado",
        "description": "Equal parts espresso and milk.",
        "originalPrice": 25,
        "discountedPrice": 22,
    },
    {
        "id": 9,
        "title": "Cold Brew",
        "description": "Cold water brewed coffee.",
        "originalPrice": 28,
        "discountedPrice": 24,
    },
    {
        "id": 10,
        "title": "Affogato",
        "description": "Espresso over ice cream.",
        "originalPrice": 29,
        "discountedPrice": 26,
    }
]
