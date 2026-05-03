#!/bin/bash
# Regénère les bundles CSS minifiés depuis les fichiers sources.
# Usage : bash css/build.sh
# À relancer après chaque modification d'un fichier dans css/

set -e
cd "$(dirname "$0")"

# Bundle pour index.html
perl - style.css projects-modern.css navbar-interactive.css > bundle.min.css <<'PERL'
my $css='';
for my $f (@ARGV) { open(my $fh,'<',$f) or die "$f: $!"; $css.=do{local $/;<$fh>}; close $fh; $css.="\n"; }
$css =~ s{/\*.*?\*/}{}gs;
$css =~ s/\s*([{};:,>+~])\s*/$1/g;
$css =~ s/\s+/ /g;
$css =~ s/^\s+|\s+$//g;
$css =~ s/\(\s+/(/g;
$css =~ s/\s+\)/)/g;
$css =~ s/;}/}/g;
$css =~ s/(?<=[\s:,(])0+(\.\d+)/$1/g;
print $css . "\n";
PERL

# Bundle pour mentions-legales.html
perl - style-mentions.css navbar-interactive.css > bundle-mentions.min.css <<'PERL'
my $css='';
for my $f (@ARGV) { open(my $fh,'<',$f) or die "$f: $!"; $css.=do{local $/;<$fh>}; close $fh; $css.="\n"; }
$css =~ s{/\*.*?\*/}{}gs;
$css =~ s/\s*([{};:,>+~])\s*/$1/g;
$css =~ s/\s+/ /g;
$css =~ s/^\s+|\s+$//g;
$css =~ s/\(\s+/(/g;
$css =~ s/\s+\)/)/g;
$css =~ s/;}/}/g;
$css =~ s/(?<=[\s:,(])0+(\.\d+)/$1/g;
print $css . "\n";
PERL

echo "✅ Bundles regénérés :"
ls -la bundle*.min.css
