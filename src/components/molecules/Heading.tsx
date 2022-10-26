export function Heading() {
  return (
    <div className="h-5/6 w-screen bg-no-repeat bg-cover bg-[url('/bg-mobile.png')] md:bg-[url('/bg-desktop.png')] flex justify-center items-center">
      <section className="relative m-auto font-medium font-display">
        <span className="text-base  md:text-2xl">Olá, meu nome é</span>
        <h1 className="text-2xl leading-10 md:text-6xl md:leading-[90px]">
          Giovani Simões Franz
        </h1>
        <span className="text-left">Desenvolvedor Front-end</span>
      </section>
    </div>
  );
}
