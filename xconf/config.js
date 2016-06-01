config = {
    URL: {
        API: '{{ pillar['mofa_frontend']['api'] }}',
        AUTH: '{{ pillar['mofa_frontend']['auth'] }}',
        NEO4J: '{{ pillar['mofa_frontend']['neo4j'] }}',
        TRACK: '{{ pillar['mofa_frontend']['track'] }}',
        PLUGIN: '{{ pillar['mofa_frontend']['plugin'] }}'
    },
    TID: '{{ pillar['mofa_frontend']['tid'] }}'
};
