import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">CALIFICACIONES</h4>
            <h3 className="text-xl">Base de datoss</h3>
            <span className="text-5xl text-white">3,40</span>
            <span className="py-1 px-3 bg-green-700 rounded-full">
              APROBADO
            </span>
          </div>
          {/* Card 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                FR
              </span>
              <div>
                <h3 className="font-bold">Fronted II</h3>
                <p className="text-gray-500">4,50</p>
                <p className="text-green-500">Aprobado</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  BK
                </span>
                <div>
                  <h3 className="font-bold">Back II</h3>
                  <p className="text-gray-500">2,78</p>
                  <p className="text-red-600">No Aprobado</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <a href="https://platzi.com/cursos/backend/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-100/20 py-2 px-4 rounded-full text-gray-600 hover:bg-primmary-100/80 transition-colors cursor-pointer"
                > Repaso</a>
                <div className="group relative inline-block">
                  <span className="bg-primary-100/20 py-2 px-4 rounded-full cursor-pointer">
                    info..
                  </span>
                  <div className="absolute invisible group-hover:visible z-10 w-48 p-2 mt-2 text-sm text-white bg-primary-100 rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                    "Bienvenidos al curso de Backend.
                    Aquí aprenderán a construir la lógica interna de aplicaciones, gestionar bases de datos y crear APIs que conecten el mundo digital.
                    Nuestro enfoque será práctico, claro y directo, para que puedan desarrollar proyectos sólidos desde el primer día."
                    <div className="absolute -top-1 left-1/2 w-3 h-3 bg-primary-100/20  transform rotate-45 -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">MENSAJES</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Juan Alberto Perez Florez</h3>
                  <p className="text-gray-500">+2 mensaje nuevo</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Luisa Rodriguez Alvarez</h3>
                  <p className="text-gray-500">+4 mensajes nuevos</p>
                </div>
                
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  Ver todo
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Alexander Williams</h3>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 1,200.87</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Jhon Philips</h3>
                    <p className="text-gray-500">Inchor Techs</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold">&euro; 12,998.88</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Recommended project</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Thomas Martin</h3>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div>
                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    Design
                  </span>
                </div>
              </div>
              /// Card 2
              <div>
                <h5 className="text-lg font-bold">
                  Need a designer to form branding essentials for my business.
                </h5>
                <p className="text-gray-500">
                  Looking for a talented brand designer to create all the
                  branding materials my new startup.
                </p>
              </div>
              <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                <div>
                  <sup className="text-sm text-gray-500">&euro;</sup>{" "}
                  <span className="text-2xl font-bold mr-2">8,700</span>
                  <span className="text-sm text-gray-500">/ month</span>
                </div>
                <div>
                  <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                    Full time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
