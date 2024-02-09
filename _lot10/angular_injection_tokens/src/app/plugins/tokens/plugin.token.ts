import { InjectionToken } from "@angular/core";
import { IPlugin } from "../models/i-plugin";

export const PLUGIN_TOKEN = new InjectionToken<IPlugin>('PLUGIN_TOKEN');
