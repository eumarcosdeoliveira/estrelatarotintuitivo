import * as Tabs from '@radix-ui/react-tabs';

const TabHM = ["Horóscopo", "Mapa Astral"];

export default function App() {
  return (
    <Tabs.Root
      className="max-w-screen-xl min-w-72 mx-auto md:px-1"
      defaultValue="Horóscopo"
    >
      <Tabs.List
        className="w-full min-w-80 flex items-center overflow-x-auto text-2xl"
        aria-label="Manage your account"
      >
        {TabHM.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="w-1/2 flex justify-center items-center group outline-none rounded-t-3xl border-violet-600 text-violet-600 data-[state=active]:bg-violet-600 data-[state=active]:text-white"
            value={item}
          >
            <div className="w-full flex justify-center items-center py-3 px-3 rounded-t-3xl duration-150 group-hover:text-white group-hover:bg-violet-600 border-l-2 border-t-2 border-r-2 border-violet-600 group-active:bg-violet-600 font-medium ">
              {item}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {TabHM.map((item, idx) => (
        <Tabs.Content key={idx} className="" value={item}>
          {item === "Horóscopo" ? (
            <div className='bg-violet-600 p-8 rounded-b-3xl'>
              <h1 className="text-2xl font-bold pb-4">
              LEIA SEU HORÓSCOPO 
              PERSONALIZADO
              </h1>

              <p className="text-xl font-light pb-4">
              Acompanhe suas tendências diariamente e receba conselhos para cada momento.
              </p>
              <input
                type="text"
                placeholder="Nome Completo"
                className="border bg-violet-600 px-5 py-3 mt-2 w-full rounded-full placeholder-white"
              />
              <input
                type="date"
                placeholder="Data de Nascimento"
                className="border bg-violet-600 px-5 py-3 mt-7 w-full rounded-full placeholder-white"
              />
              <button className="mt-9 px-5 py-4 bg-white text-violet-600 rounded-full text-xl font-bold w-full">
                Continuar
              </button>
            </div>
          ) : (
            <div className='bg-violet-600 p-8 rounded-b-3xl'>
              <h1 className="text-2xl font-bold pb-4">
              FAÇA JÁ SEU 
              MAPA ASTRAL
              </h1>

              <p className="text-xl font-light pb-4">
              Acompanhe suas tendências diariamente e receba conselhos para cada momento.
              </p>
              <input
                type="text"
                placeholder="Nome Completo"
                className="border bg-violet-600 px-5 py-3 mt-2 w-full rounded-full placeholder-white"
              />
              <input
                type="date"
                placeholder="Data de Nascimento"
                className="border bg-violet-600 px-5 py-3 mt-7 w-full rounded-full placeholder-white"
              />
              <button className="mt-9 px-5 py-4 bg-white text-violet-600 rounded-full text-xl font-bold w-full">
                Continuar
              </button>
            </div>
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
