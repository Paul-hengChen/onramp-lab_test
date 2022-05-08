import { createServer } from "miragejs";
import { mockDataset } from "./mockData";

const mockServer = () => {
  createServer({
    routes() {
      this.get("/api/properties/part_1", () => {
        const data = mockDataset.reduce((acc, cur) => {
          const cityIndex = acc.findIndex((i) => {
            return i.city === cur.city;
          });
          if (cityIndex === -1) {
            acc = acc.concat({ ...cur, houses: 1, average: cur.price });
          } else {
            const avg = mockDataset
              .filter((data) => data.city === cur.city)
              .map((i) => i.price);
            const average = avg.reduce((acc, cur) => acc + cur, 0) / avg.length;
            acc[cityIndex] = {
              ...acc[cityIndex],
              houses: acc[cityIndex].houses + 1,
              average,
            };
          }
          return acc;
        }, []);
        return data;
      });
      this.get("/api/properties/part_2", () => {
        const totalPrice = mockDataset.map((mockData) => mockData.price);
        const average =
          totalPrice.reduce((acc, cur) => acc + cur, 0) / totalPrice.length;
        const data = mockDataset.map((mockData) => ({ ...mockData, average }));
        return data;
      });
    },
  });
};

export default mockServer;
