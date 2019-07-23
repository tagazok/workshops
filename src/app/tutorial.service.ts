import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationService } from './services/application.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  infos: any;

  constructor(private http: HttpClient,
              private application: ApplicationService) { }

  getTutorialMd(tutorialId: string) {

    //const tutorial = this.application.applicationInfos.tutorials.find(element => element.id === tutorialId);
    return this.http.get(`/assets/codelabs/${tutorialId}/${tutorialId}.md`, {responseType: 'text'});
    //return this.http.get(tutorial.markdownUrl, {responseType: 'text'});
  }
}
