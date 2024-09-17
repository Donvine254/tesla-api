import prisma from "./prisma";

async function main() {
  await prisma.vehicle.createMany({
    data: [
      {
        model: "Tesla Model S",
        price: 51885.17,
        picture:
          "https://static-assets.tesla.com/configurator/compositor?&options=$MT337,$PPSW,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109300916&crop=0,0,0,0&version=v0028d202109300916",
        year: 2012,
      },
      {
        model: "Tesla Model 3",
        price: 100990,
        picture:
          "https://static-assets.tesla.com/configurator/compositor?&options=$MTS10,$PPSW,$WS90,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&version=v0028d202109300916&crop=0,0,0,0&version=v0028d202109300916",
        year: 2017,
      },
      {
        model: "Tesla Model X",
        price: 120990,
        picture:
          "https://static-assets.tesla.com/configurator/compositor?&options=$MTX10,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=2&version=v0028d202109300916&crop=0,0,0,0&version=v0028d202109300916",
        year: 2015,
      },
      {
        model: "Tesla Model Y",
        price: 65000,
        picture:
          "https://static-assets.tesla.com/configurator/compositor?&options=$MTY07,$PPSW,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=2&version=v0028d202109300916&crop=0,0,0,0&version=v0028d202109300916",
        year: 2020,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Database seeded");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
