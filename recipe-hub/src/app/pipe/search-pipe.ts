import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allRecipe:any[],searchKey:string): any[] {
  let result:any=[]
  if(!allRecipe||searchKey==""){
    return allRecipe
  }
  allRecipe.forEach((item)=>{
    if(item["name"].toLowerCase().includes(searchKey.toLowerCase())){
      result.push(item)
    }
  })
  return result;
  }

}
