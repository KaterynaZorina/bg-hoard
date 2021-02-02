import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { updateJsonInTree, formatFiles } from '@nrwl/workspace';

function sortKeys(file: string): Rule {
  return updateJsonInTree(file, (json) => {
    json.projects = sortObjectKeys(json.projects);
    return json;
  });
}

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj).sort().forEach(key => {
    sorted[key] = obj[key];
  });
  return sorted;
}

export default function (schema: any): Rule {
  return chain([
    sortKeys('workspace.json'),
    sortKeys('nx.json'),
    formatFiles()
  ]);
}
