#!/bin/sh

set JAVA_OPTS= "-Xmx2048m"
export JAVA_OPTS
#groovy test.groovy
groovy ConvertBlogXMLtoSqlite.groovy
