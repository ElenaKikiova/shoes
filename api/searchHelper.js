
exports.readSearchParams = (query) => {
  let searchParams = {};

  if(query.name){
    searchParams.name = new RegExp(query.name, "i");
  }

  if(query.minPrice && query.minPrice != 0){
    searchParams.price = { $gte: query.minPrice }
  }

  if(query.maxPrice){
    searchParams.price = {...searchParams.price, $lte: query.maxPrice }
  }

  if(query.brandId){
    searchParams.brand = {_id: query.brandId}
  }
  
  console.log('Search', searchParams)

  return searchParams;
}