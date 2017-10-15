import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LexAudioComponent} from './lexaudio/lexaudio.component';
import { DetailsItemComponent} from './details/details.component';
// import { FullLayoutComponent } from ''


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'lexaudio',
        pathMatch: 'full',
    },
    {
        path: '',
        children: [
            {
                path: 'lexaudio',
                component: LexAudioComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

export let AppComponents=[
  LexAudioComponent,
  DetailsItemComponent
];
