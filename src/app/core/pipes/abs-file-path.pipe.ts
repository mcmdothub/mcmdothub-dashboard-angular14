import { Pipe, PipeTransform } from "@angular/core";

// Absolute File Path Pipe
@Pipe({
  name: 'absFilePath'
})

// Create a custom Pipe
// Register AbsFilePathPipe in add.module.ts
export class AbsFilePathPipe implements PipeTransform {

  // if you debug =>
  // value = "storage/app/defaults/images/avatar.png"
  transform(value: any, ...args: any[]) {
    // ex old declaration inside auth.service.ts
    // apiResponse.data.profilePic = 'https://ytc.beginner2expert.com/angular14/api/' + apiResponse.data.profilePic;

    const baseUrl: string = 'https://ytc.beginner2expert.com/angular14/api/';
    const relativePath: string = value;                                             // value = "storage/app/defaults/images/avatar.png"

    const absPath: string = baseUrl + relativePath;

    return absPath;
  }
}
