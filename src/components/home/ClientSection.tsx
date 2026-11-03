import Image from "next/image";

interface ClientItem {
  name: string;
  logo?: string;
}

const clients: ClientItem[] = [
  {
    name: "VM Square",
    logo: "/images/clients/client1.png",
  },
  { name: "IT Tech Park" },
  { name: "Industrial Estate" },
  { name: "Manufacturing Plant" },
  { name: "Shopping Mall" },
  { name: "Educational Campus" },
];

function ClientLogo({ client }: { client: ClientItem }) {
  return (
    <div className="flex h-16 w-auto min-w-40 shrink-0 items-center justify-center gap-3 px-4 md:min-w-48">

      {client.logo && (
        <div className="relative h-12 w-16 shrink-0">
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
      )}

      <span className="whitespace-nowrap text-sm font-bold text-[#102A43] md:text-base">
        {client.name}
      </span>

    </div>
  );
}

export function ClientSection() {
  return (
    <section className="w-full overflow-hidden border-y border-slate-200 bg-white py-9 md:py-12">

      {/* Centered section heading */}
      <div className="mb-7 px-4 text-center md:mb-9">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-amber-600">
          Our Clients
        </p>
      </div>
      <div className="flex w-full items-center gap-4 px-4 sm:px-8 md:gap-8 lg:px-12">

        <div className="relative z-20 shrink-0 bg-white pr-2">
         <h3 className="whitespace-nowrap text-lg font-extrabold tracking-tight text-[#D99A22] md:text-xl">
          Trusted By
         </h3>
        </div>
        <div className="relative min-w-0 flex-1 overflow-hidden">

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-client-marquee">

            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
                aria-hidden={copy === 1}
              >
                {clients.map((client) => (
                  <ClientLogo key={client.name} client={client} />
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
