import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import {enableProdMode} from '@angular/core';

import { AppModule } from "./app.module";

enableProdMode();
platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(AppModule);
