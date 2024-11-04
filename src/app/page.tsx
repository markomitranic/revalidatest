import dayjs from "dayjs";

export const revalidate = 20;
export const dynamicParams = false;

export default async function Home() {
  return (
    <div>
      {dayjs().format("HH:mm:ss")}
    </div>
  );
}



