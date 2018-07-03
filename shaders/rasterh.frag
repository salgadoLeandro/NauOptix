#version 430

uniform vec4 l_dir, l_color;
uniform vec4 diffuse, ambient, emission;
uniform float shininess;
uniform int texCount;
uniform sampler2D texUnit;
uniform vec2 windowSize;

in Data {
    vec4 pos;
    vec2 texCoord;
    vec3 normal;
    vec3 l_dir;
} DataIn;

layout (location=0) out vec4 outNormal;
layout (location=1) out vec4 outPosition;
layout (location=2) out vec4 outColor;
layout (location=3) out vec2 outTexCoord;

void main() {
    vec4 color, amb;
    vec4 light_intensity_diffuse;
    vec3 light_dir;
    vec3 n;
    float intensity;

    light_dir = -normalize(DataIn.l_dir);
    n = normalize(DataIn.normal);
    intensity = max(dot(light_dir, n), 0.0);

    light_intensity_diffuse = l_color * intensity;

    if (texCount == 0) {
        color = diffuse * light_intensity_diffuse + diffuse * 0.3;
    } else {
        color = (diffuse * light_intensity_diffuse + emission + 0.3) * texture(texUnit, DataIn.texCoord);
    }

    //outNormal = vec4(normalize(DataIn.normal) * 0.5 + 0.5, 1.0);
    outNormal = vec4(normalize(DataIn.normal), 1.0);
    outTexCoord = vec2(DataIn.texCoord);
    /*if (gl_FragCoord.y >= (windowSize.x / 2)) {
        outColor = color;
    }
    else {*/
        outPosition = vec4(DataIn.pos.xyz, 1.0);
        outColor = vec4(0.0);
    //}
}