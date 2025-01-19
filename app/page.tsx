import MainArea from '@/components/home/MainArea';
import Menu from '@/components/home/Menu';
export default function Home() {
  return (
    <div className='mx-auto w-full max-w-[1488px] flex-1 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14'>
      <Menu />
      <MainArea />
    </div>
  );
}
