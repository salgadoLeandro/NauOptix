#version 430

uniform vec4 l_dir, l_color;
uniform vec4 diffuse, ambient, emission;
uniform float shininess;
uniform int texCount;
uniform sampler2D texUnit;

in Data {
    vec4 pos;
    vec2 texCoord;
    vec3 normal;
    vec3 l_dir;
} DataIn;

out vec4 color;

void main() {
    vec4 amb;
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
}