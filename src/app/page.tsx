import Image from "next/image";
import profilePicture from "@/../public/images/profile-picture.jpg";
import LatestPosts from "@/components/LatestPosts";
import LatestProjects from "@/components/LatestProjects";

import Posts from "@/data/fakepost.json";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col-reverse justify-center sm:flex-row p-3 pt-10 mb-6 gap-8">
        <article className="w-5/6 pt-6 m-auto">
          <h2 className="w-full text-4xl font-bold sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            Hi, I&apos;m Blake
          </h2>
          <p className="w-full text-2x1 mt-4 text-slate-700 dark:text-slate-400 font-medium">
            I&apos;m looking to start my career as a Web Developer.
          </p>
          <p className="max-w-md text-2x1 mt-4 text-slate-700 dark:text-slate-400 font-medium">
            Please enjoy exploring my page and viewing my progress.
          </p>
        </article>
        <Image
          className="w-2/5 rounded-full m-auto"
          alt="personal photo"
          src={profilePicture}
          priority
        />
      </section>
      <section>
        <LatestPosts data={Posts} />
      </section>
      <section className="pt-10">
        <LatestProjects />
      </section>
    </div>
  );
}
