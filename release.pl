#!/usr/bin/perl

use strict;
use warnings;
use JSON;
use Data::Dumper;

open( my $fh, '<', 'package.json' );
my @package_file = <$fh>;
my $package = decode_json( join('', @package_file) );
my $version = "REL-MOFA-" . $package->{"version"} . ".";

my @tags = `git tag`;

my $new_subver = 1;
foreach my $tag (@tags) {
    if ($tag =~ /^$version(\d+)/) {
        $new_subver = $1 + 1 if ($1 >= $new_subver);
    };
}
my $new_version = "REL-MOFA-" . $package->{"version"} . "." . $new_subver;
chomp(my $branch = `git rev-parse --abbrev-ref HEAD`);

if ($branch ne "release") {
    print "\033[91m#Err Branch error\033[00m\n";
    print "on $branch\n";
    exit 0;
}

if ($new_version !~ /^REL-MOFA-\d{1,2}\.\d{1,2}\.\d{1,2}\.\d{1,2}$/) {
    print "\033[91m#Err Version error\033[00m\n";
    print "version $new_version\n";
    exit 0;
}

print `git tag $new_version`;
print `git push origin $new_version`;
print "tag $new_version\n";
