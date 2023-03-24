
export async function getStaticProps({params}) {
  console.log('params id =',params.id)

    return {
      props: {
        productDetails: {'name': 'blaaaaaaa', id: params.id},
      },
      //notFound: true // return 404 page any way
      // revalidate: 10 // re-generate the page with each (reqest/10 sec) 
    };
}

export async function getStaticPaths() {

    return {
      paths: [
          {params: {id: '1'}}
      ],
      //fallback: false, //any not define paths will return 404
      //fallback: true, // any not define path will render on call (must handle missing data)
      fallback: 'blocking', // any not define path will wait until server render the page (take more time)
    };
}

export default function TestDetails(props) {
    let { productDetails } = props;
    if(!productDetails){
        return (
            <h1>loading....</h1>
        )
    }
    return (
      <div>
          <h1>test {productDetails.name} - {productDetails.id}</h1>
      </div>
    )
  }
  