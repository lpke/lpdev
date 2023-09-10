import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-[85vh] w-screen flex-col items-center justify-center">
      <div className="flex w-[500px] max-w-full flex-col items-center">
        <p className="mb-3 font-mono text-5xl text-green-500">
          {'<'}lpdev.io{' />'}
        </p>
        <div className="mt-7 w-full">
          <div className="m-5 rounded-lg bg-zinc-900 bg-opacity-80 p-5 text-center text-zinc-400 shadow-md shadow-green-950">
            <p>
              <span className="text-green-500">Good news! </span>
              I'm building something cool to go here.
            </p>
            <p>
              <span className="text-amber-600">Bad news... </span>
              It's not quite ready yet.
            </p>
            <p className="mt-4">
              In the meantime, check out my profile on{' '}
              <a
                href="https://www.linkedin.com/in/luke-perich/"
                target="_blank"
                className="font-semibold text-[#409bc9]"
              >
                <Image
                  src="images/icons/linkedin.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="mb-1 ml-[3px] mr-1 inline"
                />
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
