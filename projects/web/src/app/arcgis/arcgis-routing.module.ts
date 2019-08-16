import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SceneViewComponent } from './scene-view/scene-view.component';
import { SceneEditorComponent } from './scene-editor/scene-editor.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'map', component: MapViewComponent },
            { path: 'scene', component: SceneViewComponent },
            { path: 'scene-editor', component: SceneEditorComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcgisRoutingModule { }
