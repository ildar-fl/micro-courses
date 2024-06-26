import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Карта курсов',
  robots: {
    index: false,
    follow: false,
  },
};

interface IPageProps {
  params: {};
  searchParams: {};
}

export default function MapNext({}: IPageProps) {
  return <div className='container py-10'>Map</div>;
}
