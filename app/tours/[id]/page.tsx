import React from "react";
import natureImg from "@/images/img-1.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <h2>Local image</h2>
          <Image
            src={natureImg}
            priority
            width={196}
            height={192}
            className="w-48 h-48 object-cover rounded"
            alt="nature"
          />
        </div>

        <div>
          <h2>Remote image</h2>
          <Image
            src={url}
            className="w-48 h-48 object-cover rounded"
            width={196}
            height={192}
            priority
            alt="tour"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
