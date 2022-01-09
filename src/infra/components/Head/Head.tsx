import NextHead from 'next/head' ;

type PropType = {
  title: string;
};

export default function Head({ title }: PropType) {
  return (
    <NextHead>
      <title>
        { title }
      </title>
    </NextHead>
  );
}
