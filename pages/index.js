import React from "react";
import Link from "next/link";
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title="Início"/>
      <p className='text-center'>
        O restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className="bg-blue-400 px-12 py-4 rounded font-bold text-white shadow-lg hover:shadow">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      { !data && <p className='my-12 text-center'>Carregando...</p>}
      { data && data.showCoupon === "VERDADEIRO" &&
        <p className="my-12 text-center w-72 mx-auto font-bold">
          {data.description}
        </p>
      }
    </div>
  );
};
export default Index;
