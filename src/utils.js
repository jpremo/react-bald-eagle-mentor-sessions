function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArr = (arr) => {
    return arr[getRandom(0, arr.length - 1)];
};

export const breedInfo = [
    { id: "abys", name: "Abyssinian" },
    { id: "aege", name: "Aegean" },
    { id: "abob", name: "American Bobtail" },
    { id: "acur", name: "American Curl" },
    { id: "asho", name: "American Shorthair" },
    { id: "awir", name: "American Wirehair" },
    { id: "amau", name: "Arabian Mau" },
    { id: "amis", name: "Australian Mist" },
    { id: "bali", name: "Balinese" },
    { id: "bamb", name: "Bambino" },
    { id: "beng", name: "Bengal" },
    { id: "birm", name: "Birman" },
    { id: "bomb", name: "Bombay" },
    { id: "bslo", name: "British Longhair" },
    { id: "bsho", name: "British Shorthair" },
    { id: "bure", name: "Burmese" },
    { id: "buri", name: "Burmilla" },
    { id: "cspa", name: "California Spangled" },
    { id: "ctif", name: "Chantilly-Tiffany" },
    { id: "char", name: "Chartreux" },
    { id: "chau", name: "Chausie" },
    { id: "chee", name: "Cheetoh" },
    { id: "csho", name: "Colorpoint Shorthair" },
    { id: "crex", name: "Cornish Rex" },
    { id: "cymr", name: "Cymric" },
    { id: "cypr", name: "Cyprus" },
    { id: "drex", name: "Devon Rex" },
    { id: "dons", name: "Donskoy" },
    { id: "lihu", name: "Dragon Li" },
    { id: "emau", name: "Egyptian Mau" },
    { id: "ebur", name: "European Burmese" },
    { id: "esho", name: "Exotic Shorthair" },
    { id: "hbro", name: "Havana Brown" },
    { id: "hima", name: "Himalayan" },
    { id: "jbob", name: "Japanese Bobtail" },
    { id: "java", name: "Javanese" },
    { id: "khao", name: "Khao Manee" },
    { id: "kora", name: "Korat" },
    { id: "kuri", name: "Kurilian" },
    { id: "lape", name: "LaPerm" },
    { id: "mcoo", name: "Maine Coon" },
    { id: "mala", name: "Malayan" },
    { id: "manx", name: "Manx" },
    { id: "munc", name: "Munchkin" },
    { id: "nebe", name: "Nebelung" },
    { id: "norw", name: "Norwegian Forest Cat" },
    { id: "ocic", name: "Ocicat" },
    { id: "orie", name: "Oriental" },
    { id: "pers", name: "Persian" },
    { id: "pixi", name: "Pixie-bob" },
    { id: "raga", name: "Ragamuffin" },
    { id: "ragd", name: "Ragdoll" },
    { id: "rblu", name: "Russian Blue" },
    { id: "sava", name: "Savannah" },
    { id: "sfol", name: "Scottish Fold" },
    { id: "srex", name: "Selkirk Rex" },
    { id: "siam", name: "Siamese" },
    { id: "sibe", name: "Siberian" },
    { id: "sing", name: "Singapura" },
    { id: "snow", name: "Snowshoe" },
    { id: "soma", name: "Somali" },
    { id: "sphy", name: "Sphynx" },
    { id: "tonk", name: "Tonkinese" },
    { id: "toyg", name: "Toyger" },
    { id: "tang", name: "Turkish Angora" },
    { id: "tvan", name: "Turkish Van" },
    { id: "ycho", name: "York Chocolate" },
];

export const getCatBreed = () => {
    const breed = randomArr(breedInfo);
    return breed.id;
};

export const getCatImage = async (breed) => {
    const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`,
        {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "b07ebe63-3b58-4285-a374-10aa6a74e158",
            },
            method: "GET",
        }
    );
    const data = await res.json();
    if (data[0]) {
        return data[0].url;
    }
    return "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg";
};