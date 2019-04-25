import { NgModule } from '@angular/core';
import { YoutubePipe } from './youtube/youtube';
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
	declarations: [YoutubePipe],
	imports: [],
	exports: [YoutubePipe]
})
export class PipesModule {
	constructor(private dom: DomSanitizer) {
	}
	
	transform(value,args){
	   console.log(value);
	}
}
