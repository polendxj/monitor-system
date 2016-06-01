component=$1
version=$2
subversion=$3 

ng_repo="http://10.13.0.8:8081/nexus/content/sites/maxent-raw-releases"

tar czf mofaweb_xconf.tgz xconf
md5sum  mofaweb_xconf.tgz > mofaweb_xconf.tgz+md5
curl -v --user 'admin:admin123' --upload-file ./mofaweb_xconf.tgz "$ng_repo/$component/$version/$version.$subversion/mofaweb_xconf.tgz"
curl -v --user 'admin:admin123' --upload-file ./mofaweb_xconf.tgz+md5 "$ng_repo/$component/$version/$version.$subversion/mofaweb_xconf.tgz+md5"

md5sum mofaweb.tgz > mofaweb.tgz+md5
curl -v --user 'admin:admin123' --upload-file ./mofaweb.tgz "$ng_repo/$component/$version/$version.$subversion/mofaweb.tgz"
curl -v --user 'admin:admin123' --upload-file ./mofaweb.tgz+md5 "$ng_repo/$component/$version/$version.$subversion/mofaweb.tgz+md5"
