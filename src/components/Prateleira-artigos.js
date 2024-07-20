import React from 'react';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength) + '...';
};

const artigos = [
    {
        caregoria: "FUTURO",
        title: "What is SaaS? Software as a Service Explained",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, this is the test of responsive",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
        authorName: "Sidi dev",
        date: "Jan 4 2022",
        href: "https://www.google.com/"
    },
    {
        caregoria: "AMOR",
        title: "A Quick Guide to WordPress Hosting",
        desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
        authorName: "Micheal",
        date: "Jan 4 2022",
        href: "https://www.google.com/"
    },
    {
        caregoria: "AUTOCONHECIMENTO",
        title: "7 Promising VS Code Extensions Introduced in 2022",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
        authorName: "Luis",
        date: "Jan 4 2022",
        href: "https://www.google.com/"
    },
    {
        caregoria: "AMOR",
        title: "How to Use Root C++ Interpreter Shell to Write C++ Programs passarinho amarelo",
        desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
        img: "https://blog.creamy.com.br/wp-content/uploads/2023/09/rosto-oleoso-homem-topo.jpg",
        authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
        authorName: "Lourin",
        date: "Jan 4 2022",
        href: "https://www.google.com/"
    }
];

const TruncatedDescription = ({ desc, href }) => {
    const truncatedDesc = truncateText(desc, 100);
    return (
        <div className="text-justify">
            <p className="line-clamp-ellipsis text-gray-400 text-sm pb-1 mt-1 leading-none pt-2">{truncatedDesc}</p>
        </div>
    );
};

const TruncatedTitle = ({ title, href }) => {
    const truncatedTil = truncateText(title, 40);
    return (
        <div className="text-justify">
            <h3 className="text-base text-gray-400 font-extrabold leading-none">{truncatedTil}</h3>
        </div>
    );
};

const Artigos = () => {
    return (
        <section className="mt-6 mx-auto max-w-screen-xl md:px-1">
            <div className="w-full border-b-2 border-violet-600 flex gap-x-3 text-sm">
                <h1 className="text-3xl pb-1 text-gray-800 font-semibold">
                    Artigos
                </h1>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {artigos.map((item, key) => (
                    <article className="mx-full mt-1 shadow-sm border rounded-2xl duration-300 hover:shadow-lg" key={key}>
                        <a href={item.href} className="flex flex-col h-full">
                            <img src={item.img} loading="lazy" alt={item.title} className="object-cover w-full h-36 rounded-t-md" />
                            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img src={item.authorLogo} className="w-full h-full rounded-full" alt={item.authorName} />
                                </div>
                                <div className="ml-3">
                                    <span className="block text-gray-900">{item.authorName}</span>
                                    <span className="block text-gray-400 text-sm">{item.date}</span>
                                </div>
                            </div>
                            <div className="pt-4 ml-5 mr-5 mb-4 flex-grow">
                                <h3 className="text-xs pb-2 text-violet-600 font-extrabold">{item.caregoria}</h3>
                               
                                <TruncatedTitle title={item.title} href={item.href} />
                                <TruncatedDescription desc={item.desc} />
                            </div>
                           
                            <a href={item.href} className="text-violet-600 font-extrabold align-baseline self-start ml-5 mr-5 mb-4">Leia mais</a>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Artigos;
