import { IsString } from "class-validator";

export class CreateCoffeeDto {
    //创建我们的数据传输对象的形状或对象接口 
    //安全性 DTO让我们为进入API请求主体的数据的形状创建一个定义Api的请求（验证发送到我们应用程序的数据的正确性）
//   private readonly name: string;
//   private readonly brand: string;
//   private readonly flavors: string[];
@IsString()
readonly name:string;

@IsString()
readonly brand:string;

@IsString({each:true})
readonly flavors:string[];

}
