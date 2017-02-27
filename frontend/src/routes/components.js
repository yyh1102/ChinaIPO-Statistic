export const App=resolve=>{
    require.ensure(['../components/App.vue'],()=>{
        resolve(require('../components/App.vue'));
    })
};

export const CompanyInfo=resolve=>{
    require.ensure(['../components/Company/info/info.vue'],()=>{
        resolve(require('../components/Company/info/info.vue'));
    })
};

export const CompanyGraph=resolve=>{
    require.ensure(['../components/Company/graph/graph.vue'],()=>{
        resolve(require('../components/Company/graph/graph.vue'));
    })
};

export const SeniorInfo=resolve=>{
    require.ensure(['../components/Senior/info/info.vue'],()=>{
        resolve(require('../components/Senior/info/info.vue'));
    })
};

export const SeniorWithUniv=resolve=>{
    require.ensure(['../components/Senior/graph/withUniversity.vue'],()=>{
        resolve(require('../components/Senior/graph/withUniversity.vue'));
    })
};

export const SeniorWithBirth=resolve=>{
    require.ensure(['../components/Senior/graph/withBirth.vue'],()=>{
        resolve(require('../components/Senior/graph/withBirth.vue'));
    })
};

export const SeniorWithEdu=resolve=>{
    require.ensure(['../components/Senior/graph/withEducation.vue'],()=>{
        resolve(require('../components/Senior/graph/withEducation.vue'));
    })
};
