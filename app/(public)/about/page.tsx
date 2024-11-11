import React from "react";

function page() {
  return (
    <div className=" bg-[#F3F3F3] z-10 ml-28">
      <div className="flex justify-between whitespace-nowrap mt-40 ">
        <div className="h-[100px]  mt-5 ">
          <h1 className=" font-semibold font-[DM Sans]  text-black text-5xl overflow-hidden">
            Hi I`m Rimsha
            <br />
            Adnan Sheikh
            <br />
            Frontened Developer
          </h1>
          <p className="text-[#606060] font-medium text-2xl tracking-wide font-[DM Sans] mt-11">
            My work is mainly focused on
            <br />
            third-dimension modeling, texturing and
            <br />
            rendering. I like exploring the creatures
            <br />
            with a touch of dark surrealism for
            <br />
            characters and production.
          </p>
          <p className="text-[#606060] font-medium text-2xl tracking-wide mt-12 font-[DM Sans]">
            Now I’m an interactive media design
            <br />
            student in Istanbul ⏤ currently
            <br />
            freelancing and seeking internship
            <br />
            opportunities.
          </p>
        </div>
        <div className=" mr-44">
          <img
            src="https://s3-alpha-sig.figma.com/img/2d94/43a5/3cdcdd917bc0e24fdd38c0ec707675ba?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUy~6E5CcEC3jDXhoh4cRfXdnSxwaDHKhflrIlsl73ItRvm08j1qbLsrBWlH5Xae0hg-Fo7-8D30LfOpm6yUOPcXUUVZ-WjdMknXNeVGoPLTJOxzftmcJhdnENNoJtR1Z27aNd9fV66ViZawXfUE7AgCNy2ttgZbuwBSzjgYTwpmkW2q6UHHfXoyMFl4ioX-EGA-t5v3pFeBsCmBHB-JCZI9bYGYXemF4p4vQ4YMXxZl~qTEkIq8ahs0SXqHChV3TGhpoMHiwETH3yt1UsVrPQFDbXtRYmAW9~AcnJZP0du6GdJQuIU7oZX1NQH9gO7GRynaenIHT90lK2qslhCgEw__"
            width={421}
            height={190}
          />
        </div>
      </div>
      <div className="flex mt-20 ">
        <div className="text-black">
          <h3 className="underline font-semibold font-[DM Sans] ">
            Main Software{" "}
          </h3>
        </div>
        <div className="ml-14 text-black">
          <p>
            Pixologic ZBrush, Autodesk Maya, The Foundry Mari,
            <br />
            Arnold Renderer, Blender, Forger
          </p>
          <p className="mt-5">Adobe CC, Figma, Ableton</p>
        </div>
      </div>
      <div className="flex mt-10 text-black">
        <div>
          <h3 className="underline font-semibold  font-[DM Sans]">
            Main Skills
          </h3>
        </div>
        <div className="ml-20 text-black">
          <p>
            Organic and Polygonal Modeling, UV Layout,
            <br />
            Texturing, Retopology, Ilustration, Sound Design
          </p>
        </div>
      </div>
      <div className="h-0.5 w-[1350px] bg-[#606060] mt-24"></div>
      <div className="flex mt-20">
        <div>
          <h3 className="font-medium text-[#606060] text-3xl font-[DM Sans]">
            I am thrilled to answer to
            <br />
            your next project.
          </h3>
        </div>
        <div className="ml-[700px] text-black">
          <p className="font-normal font-[DM Sans] text-3xl">
            rimshasheikh@gmail.com
          </p>
          <p className="mt-3">View Resume</p>
        </div>
      </div>
    </div>
  );
}

export default page;
