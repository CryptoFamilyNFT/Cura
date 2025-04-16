import Page1 from '../../pages/landing-page/Page1';
import Page2 from '../../pages/landing-page/Page2';
import Page3 from '../../pages/landing-page/Page3';
import WrappedTreeScene from './3d/TreeScene';
export const Hero = () => {
    return (
        <div className='absolute w-[100%] scroll-smooth overflow-x-hidden'>
            <div className="min-h-screen relative bg-[#A1C877] flex flex-col items-center justify-center p-6">
                <h1 className="text-[#23697e] relative top-30 text-9xl font-bold">CURA</h1>
                <div className=" w-full relative -top-50 h-screen z-0 bg-transparent">
                    <WrappedTreeScene />
                </div>
                <h3 className="text-[#23697e] relative -top-80 text-2xl font-bold">Benvenuto su Cura!</h3>
                <h4 className="text-[#23697e] relative -top-80 text-2xl font-bold">Sii pronto ad iniziare il tuo benessere</h4>
            </div>
            <Page1 />
            <Page2 />
            <Page3 />
        </div>
    )
}