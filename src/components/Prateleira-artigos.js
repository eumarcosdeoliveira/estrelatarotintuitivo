import React, { useEffect, useState } from 'react';
import axios from 'axios';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength) + '...';
};

const cleanHTML = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
};

const TruncatedDescription = ({ desc }) => {
    const truncatedDesc = truncateText(desc, 100);
    return (
        <div className="text-justify">
            <p className="line-clamp-ellipsis text-gray-400 text-sm pb-1 mt-1 leading-none pt-2">{truncatedDesc}</p>
        </div>
    );
};

const TruncatedTitle = ({ title }) => {
    const truncatedTitle = truncateText(title, 40);
    return (
        <div className="text-justify">
            <h3 className="text-base text-gray-400 font-extrabold leading-none">{truncatedTitle}</h3>
        </div>
    );
};

const Artigos = () => {
    const [artigos, setArtigos] = useState([]);

    useEffect(() => {
        const fetchArtigos = async () => {
            try {
                const response = await axios.get('https://estrelatarotintuitivo.com/wp-json/wp/v2/artigos');
                setArtigos(response.data);
            } catch (error) {
                console.error('Erro ao obter artigos:', error);
            }
        };

        fetchArtigos();
    }, []);

    return (
        <section className="mt-6 mx-auto max-w-screen-xl md:px-1">
            <div className="w-full border-b-2 border-violet-600 flex gap-x-3 text-sm">
                <h1 className="text-3xl pb-1 text-gray-800 font-semibold">
                    Artigos
                </h1>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {artigos.map((item, key) => {
                    const categoria = item.categories && item.categories.length > 0
                        ? item.categories[0].slug.replace('slug-', '')
                        : 'sem-categoria';
                    const imageUrl = item.url; // Ajuste conforme a estrutura correta da sua API
                    const description = cleanHTML(item.excerpt.rendered);

                    return (
                        <article className="mx-full mt-1 shadow-sm border rounded-2xl duration-300 hover:shadow-lg" key={key}>
                            <a href={item.link} className="flex flex-col h-full">
                                {imageUrl && (
                                    <img src={imageUrl} loading="lazy" alt={item.title.rendered} className="object-cover w-full h-36 rounded-t-md" />
                                )}
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    {item.author_avatar_urls && item.author_avatar_urls['96'] && (
                                        <div className="flex-none w-10 h-10 rounded-full">
                                            <img src={item.author_avatar_urls['96']} className="w-full h-full rounded-full" alt={item.author_name} />
                                        </div>
                                    )}
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{item.author_name}</span>
                                        <span className="block text-gray-400 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                <div className="pt-4 ml-5 mr-5 mb-4 flex-grow">
                                    <h3 className="text-xs pb-2 text-violet-600 font-extrabold">{categoria}</h3>
                                    <TruncatedTitle title={item.title.rendered} />
                                    <TruncatedDescription desc={description} />
                                </div>
                                <a href={item.link} className="text-violet-600 font-extrabold align-baseline self-start ml-5 mr-5 mb-4">Leia mais</a>
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Artigos;
