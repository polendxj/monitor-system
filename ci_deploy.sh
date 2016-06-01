component=$1
branch=$2

if [ $branch == develop ]; then
    salt_master=10.18.1.10
elif [[ $branch == release/* ]] || [[ $branch == hotfix/* ]]; then
    salt_master=10.17.0.7
fi

ng_repo="http://10.13.0.8:8081/nexus/content/sites/maxent-raw-ci"


head=`git ls-remote --heads git@gitlab.maxent-inc.com:web/anti-fraud-component.git |grep $branch |cut -f1`

tar czf mofaweb_xconf.tgz xconf
md5sum  mofaweb_xconf.tgz > mofaweb_xconf.tgz+md5
curl -v --user 'admin:admin123' --upload-file ./mofaweb_xconf.tgz "$ng_repo/$component/$head/mofaweb_xconf.tgz"
curl -v --user 'admin:admin123' --upload-file ./mofaweb_xconf.tgz+md5 "$ng_repo/$component/$head/mofaweb_xconf.tgz+md5"

md5sum mofaweb.tgz > mofaweb.tgz+md5
curl -v --user 'admin:admin123' --upload-file ./mofaweb.tgz "$ng_repo/$component/$head/mofaweb.tgz"
curl -v --user 'admin:admin123' --upload-file ./mofaweb.tgz+md5 "$ng_repo/$component/$head/mofaweb.tgz+md5"

#echo ssh track@10.18.1.10 "sudo salt -I 'roles:mofa' state.sls pillar=\"{'CI':'yes','head':'$head'}\" mofa_frontend"
ssh track@$salt_master "sudo salt '*' saltutil.refresh_pillar;sudo salt -I 'roles:mofa_frontend' state.sls pillar=\"{'CI':'yes','head':'$head'}\" mofa_frontend"

#deliberately modify to trigger ci test
#deliberately modify to trigger ci test again
#deliberately modify to trigger ci test once again
