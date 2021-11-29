export const template = `
  {{#if isLoading}}
    {{{loader}}}
  {{else}}
    {{children}}
  {{/if}}
`;
