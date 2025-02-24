
import Container from './layout/Container';
import Product from './Product';

const Featureproducts = () => {
    return (
        <section className='mt-[50px]'>
            <Container>
            <h2 className="text-xl text-center lg:text-2xl mb-8 font-bold text-primary font-Nunito">
                       Feature Products
                    </h2>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>

                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    </div>
            </Container>
        </section>
    );
};

export default Featureproducts;