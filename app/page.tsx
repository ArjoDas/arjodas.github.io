import Image from 'next/image'
import Link from 'next/link'
// import { BlogPosts } from 'app/components/posts'
import Projects from 'app/components/projects'


export default function Page() {
  return (
    <section>
      <div className="flex flex-row items-center gap-6 mb-8">
        <div className="w-1/3 max-w-xs">
          <Image 
            src="/images/profileimg.jpg"
            alt="Arjo Das"
            width={400}
            height={400}
            className="rounded-sm object-cover w-full shadow-md"
            priority
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tighter mb-2">
            Arjo Das
          </h1>
          <p className="text-md md:text-xl mb-4">
            Tech enthusiast with diverse academic interests, passionate about solving real problems
          </p>
        </div>
      </div>
      <p className="text-base">
            Currently serving national service at the Singapore Armed Forces while studying CS1010x at NUS.
            Eager to kick off my Computer Science degree at the National University of Singapore in the 2025/2026 academic year.
      </p>
      <div id="projects" className="my-8">
        <Projects></Projects>
      </div>
    </section>
  )
}